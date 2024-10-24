import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({ dest: "uploads/" });

export const /*remoteUpload*/ todoIconUpload = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: process.env.SAVEFILESORG_API_KEY,
    relativePath: "/todo-api/todos/*",
  }),
  preservePath: true
});

export const /*remoteUpload*/ userAvaterUpload = multer({
    storage: multerSaveFilesOrg({
      apiAccessToken: process.env.SAVEFILESORG_API_KEY,
      relativePath: "/todo-api/users/*",
    }),
    preservePath: true
  });
