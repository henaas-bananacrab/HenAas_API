import Database from "better-sqlite3";

const db = new Database("textdb.sqlite");

db.prepare(`
    CREATE TABLE IF NOT EXISTS text (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT
    );
`).run();

const getAllObjects = () => {
    const stmt = db.prepare("SELECT * FROM text");
    return stmt.all();
};

const addObject = (text) => {
    const stmt = db.prepare("INSERT INTO text (text) VALUES (?)");
    const info = stmt.run(text);
    return info.lastInsertRowid;
};

const getObjectById = (id) => {
    const stmt = db.prepare("SELECT * FROM text WHERE id = ?");
    return stmt.get(id);
};

const deleteObjectById = (id) => {
    const stmt = db.prepare("DELETE FROM text WHERE id = ?");
    return stmt.run(id).changes > 0;
};

const updateObjectById = (id, newText) => {
    const stmt = db.prepare("UPDATE text SET text = ? WHERE id = ?");
    return stmt.run(newText, id).changes > 0;
};

export {
    getAllObjects,
    addObject,
    getObjectById,
    deleteObjectById,
    updateObjectById
};