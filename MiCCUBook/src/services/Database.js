import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "MiCCU.db";
const database_version = "0.0";
const database_displayname = "MiCCU SQLite Offline Database";
const database_size = 200000;

export default class Database {
    listSections() {

    }

    sectionById(id) {
        console.log(id)
    }

    closeDatabase(db) {
        if (db) {
            console.log("Closing DB");
            db.close()
            .then(status => {
                console.log("Database CLOSED");
            })
            .catch(error => {
                this.errorCB(error);
            });
        } else {
            console.log("Database was not OPENED");
        }
    };
}
