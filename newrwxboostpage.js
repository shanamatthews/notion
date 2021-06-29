import { Client } from "@notionhq/client"
import minimist from "minimist"

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

// get args from CLI
const argv = minimist(process.argv.slice(2));
const pageTitle = argv._[0];
const videoLink = argv._[1];

async function addItem(text) {
  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { "content": text } }] },
        Class: { select: { name: "rwx-boost" } },
        Type: { select: { name: "Lecture" } },
        "Video link": { url: videoLink },
      }
    }).then(response => {
      console.log(videoLink);
    });
  } catch (error) {
    console.error(error.body)
  }
}

addItem(pageTitle);
