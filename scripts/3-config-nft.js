import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x86CB6CeFd24a2E697c23B86EEba6B42570F85D07",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Tiramisu",
        description: "This NFT will give you access to TiramisuDAO!",
        image: readFileSync("scripts/assets/tiramisu.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()