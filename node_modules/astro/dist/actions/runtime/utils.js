const formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
function hasContentType(contentType, expected) {
  const type = contentType.split(";")[0].toLowerCase();
  return expected.some((t) => type === t);
}
async function getAction(pathKeys) {
  let { server: actionLookup } = await import(import.meta.env.ACTIONS_PATH);
  for (const key of pathKeys) {
    if (!(key in actionLookup)) {
      throw new Error("Action not found");
    }
    actionLookup = actionLookup[key];
  }
  if (typeof actionLookup !== "function") {
    throw new Error("Action not found");
  }
  return actionLookup;
}
export {
  formContentTypes,
  getAction,
  hasContentType
};
