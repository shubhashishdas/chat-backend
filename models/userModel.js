var db = require('../utilities/database');

module.exports = class User {
    constructor(id, name, username, password, created, modified) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.created = created;
        this.modified = modified
    }

    static fetchAll() {
        return db.execute('SELECT * FROM user');
    }

    save() {
        return db.execute(
            'INSERT INTO user (name, username, password, created, modified) VALUES(?, ?, ?, ?, ?)',
            [this.name, this.username, this.password, this.created, this.modified]
        )
    }

    static findByUsername(username) {
        return db.execute('SELECT * FROM user WHERE username = ?', [username]);
    }

    static findById(id) {
        return db.execute('SELECT * FROM id WHERE id = ?', [id]);
    }
}