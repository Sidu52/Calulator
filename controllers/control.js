const Todo = require('../modals/schema')
// home
module.exports.home = (req, res) => {
    Todo.find({}, (err, data) => {
        if (err) { console.log("Error", err) };
        return res.render('home', {
            title: 'ToDo App',
            data: data
        });
    })
}
// Create
module.exports.create = (req, res) => {
    Todo.create({
        name: req.body.name,
        date: req.body.date,
        category: req.body.category
    }, (err, data) => {
        if (err) { res.send("Error!", err) };
        res.redirect("/");
    });
}
//Delete
module.exports.delete = (req, res) => {
    const id = req.params.id
    Todo.deleteOne({ _id: id },
        (err, data) => {
            if (err) { res.send("Error!", err) };
            res.redirect("/");
        });
}