import { config } from "dotenv";
import ftp from "basic-ftp";
import path from "path";
import { fileURLToPath } from "url";

config();

const REMOTE_DIR = process.env.REMOTE_DIR
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOCAL_DIR = path.join(__dirname, process.env.LOCAL_DIR);
const EXCEPTIONS = [".htaccess", "resources", "api"]

const deploy = async () => {
  const client = new ftp.Client()
  client.ftp.verbose = false

  try {
    await client.access({
      host: process.env.FTP_HOST,
      port: parseInt(process.env.FTP_PORT),
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false
    })

    console.log("Connection established successfully!")

    await deleteRemoteFiles(client, REMOTE_DIR)
    await uploadLocalFiles(client, LOCAL_DIR, REMOTE_DIR)

  } catch (e) {
    console.error("An error occurred during deployment:", e)
  } finally {
    client.close()
    console.log("Happy code! Your site is now live.")
  }
}

const deleteRemoteFiles = async (client, dir) => {
  const list = await client.list(dir)
  console.log("Starting the process of deleting remote files...")

  for (const item of list) {
    if (EXCEPTIONS.includes(item.name)) {
      continue
    }
    if (item.isDirectory) {
      await client.removeDir(`${dir}/${item.name}`);
    } else {
      await client.remove(`${dir}/${item.name}`);
    }
  }

  console.log("Deletion completed.\n\n")
}

const uploadLocalFiles = async (client, LOCAL_DIR, REMOTE_DIR) => {
  console.log("Starting to upload local files...")
  await client.uploadFromDir(LOCAL_DIR, REMOTE_DIR)
  console.log("File upload completed successfully.\n\n")
}

deploy()
