const { User, Thought } = require("../models");
// const { getThought } = require("./thoughtController");

module.exports = {
  getUsers(req, res) {
    User.find()
      .populate("thoughts")
      .populate("friends")
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate("thoughts")
      .populate("friends")
      .then((user) => (!user ? res.status(404).json({ message: "No user with that ID" }) : res.json(user)))
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true })
      .then((user) => (!user ? res.status(404).json({ message: "No user with that ID" }) : res.json(user)))
      .catch((err) => res.status(500).json(err));
  },
  // deleteUser(req, res) {
  //   User.findOneAndDelete({ _id: req.params.userId })
  //     .then((user) => {
  //       return Thought.deleteMany({ _id: { $in: user.thoughts } });
  //     })
  //     .then(() => {
  //       !user ? res.status(404).json({ message: "No user with that ID" }) : res.json(user);
  //     })
  //     .catch((err) => res.status(500).json(err));
  // },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => {
        return Thought.deleteMany({
          _id: { $in: user.thoughts },
        });
      })
      .then(() => {
        res.json({ message: "user deleted" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  addFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { runValidators: true, new: true })
      .then((user) => (!user ? res.status(404).json({ message: "No user found with that ID" }) : res.json(user)))
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    // User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: { userId: req.params.friendId } } }, { runValidators: true, new: true })
    User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { runValidators: true, new: true })
      .then((user) => (!user ? res.status(404).json({ message: "No user found with that ID :(" }) : res.json(user)))
      .catch((err) => res.status(500).json(err));
  },
};
