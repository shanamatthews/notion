import { Client } from "@notionhq/client"
import minimist from "minimist"

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

// get args from CLI
const argv = minimist(process.argv.slice(2));
const pageTitle1 = argv._[0];
const pageTitle2 = argv._[1];
const pageTitle = pageTitle1 + pageTitle2;
const videoLink = argv._[2];
const materialsLink = argv._[3];

async function addItem(title, videoLink) {
  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { "content": title } }] },
        Class: { select: { name: "rwx-boost" } },
        Type: { select: { name: "Lecture" } },
        "Video link": { url: videoLink },
        // this is broken - can't find an example in docs
         Materials: { url: materialsLink },
      },
      children: [{
        object: "block",
        type: "paragraph",
        paragraph: {
          text: [{
            type: "text",
            text: {
              content: "rwx boost course page",
              link: { url: "https://github.com/rwxrob/boost" },
            }
          }],
        }
      },
      {
        object: "block",
        type: "heading_1",
        heading_1: {
          text: [{
            type: "text",
            text: {
              content: "Day " + pageTitle2
            },
          }],
        },
      }],
    }).then(response => {
      // console.log(response);
    });
  } catch (error) {
    console.error(error.body)
  }
}

addItem(pageTitle, videoLink);
