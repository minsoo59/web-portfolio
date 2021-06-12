import Write from "../models/Write";

// Write.find({}, (error, writingList) => {});

const strategy = async (req, res) => {
  try {
    const writingList = await Write.find({});
    return res.render("strategy", { pageTitle: "Strategy", writingList });
  } catch (err) {
    return res.render("server-error", { err });
  }
};
const see = (req, res) => {
  const { id } = req.params;
  return res.render("see", {
    pageTitle: `Seeing`,
  });
};
const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", {
    pageTitle: `Editing`,
  });
};
const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/strategy/${id}`);
};

const getUpload = (req, res) => {
  return res.render("upload");
};
const postUpload = async (req, res) => {
  try {
    const { title, description, hashtags } = req.body;
    await Write.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/strategy");
  } catch (err) {
    return res.render("upload", {
      pageTitle: "Upload",
      errorMessage: err._message,
    });
  }
};
const deleteWriting = (req, res) => {
  res.send("Delete Writing");
};

module.exports = {
  see,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteWriting,
  strategy,
};
