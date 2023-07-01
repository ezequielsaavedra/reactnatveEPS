import * as SQLite from "expo-sqlite"

const dbFav = SQLite.openDatabase("animesFav.db")
const dbFin = SQLite.openDatabase("animesFinished.db")
const dbWatch = SQLite.openDatabase("animesWatchList.db")

export const initFav = () => {
    const promise = new Promise((resolve, reject) => {
        dbFav.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS animesFav (id  TEXT NOT NULL, name TEXT NOT NULL, img TEXT NOT NULL, date TEXT NOT NULL, duracion TEXT NOT NULL, categoria TEXT NOT NULL, descripcion TEXT NOT NULL, rating TEXT NOT NULL)',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const insertAnimeFav = (id ,name, img, date, duracion, categoria, descripcion, rating) => {
    const promise = new Promise((resolve, reject) => {
        dbFav.transaction(tx => {
            tx.executeSql(
                "INSERT INTO animesFav (id, name, img, date, duracion, categoria, descripcion, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [id, name, img, date, duracion, categoria, descripcion, rating],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    })
    return promise
}

export const deleteAnimeFav = (id) => {
    const promise = new Promise((resolve, reject) => {
        dbFav.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM animesFav WHERE id = ?',
                [id],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });
    return promise;
};

export const fetchAnimeFav = () => {
    const promise = new Promise((resolve, reject) => {
        dbFav.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM animesFav",
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });
    return promise;
};

export const initFin = () => {
    const promise = new Promise((resolve, reject) => {
        dbFin.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS animesFinished (id  TEXT NOT NULL, name TEXT NOT NULL, img TEXT NOT NULL, date TEXT NOT NULL, duracion TEXT NOT NULL, categoria TEXT NOT NULL, descripcion TEXT NOT NULL, rating TEXT NOT NULL)',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const insertAnimeFini = (id, name, img, date, duracion, categoria, descripcion, rating) => {
    const promise = new Promise((resolve, reject) => {
        dbFin.transaction(tx => {
            tx.executeSql(
                "INSERT INTO animesFinished (id, name, img, date, duracion, categoria, descripcion, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [id, name, img, date, duracion, categoria, descripcion, rating],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    })
    return promise
}

export const deleteAnimeFini = (id) => {
    const promise = new Promise((resolve, reject) => {
        dbFin.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM animesFinished WHERE id = ?',
                [id],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });
    return promise;
};

export const fetchAnimeFini = () => {
    const promise = new Promise((resolve, reject) => {
        dbFin.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM animesFinished",
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });
    return promise;
};


export const initWatch = () => {
    const promise = new Promise((resolve, reject) => {
        dbWatch.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS animesWatchList (id  TEXT NOT NULL, name TEXT NOT NULL, img TEXT NOT NULL, date TEXT NOT NULL, duracion TEXT NOT NULL, categoria TEXT NOT NULL, descripcion TEXT NOT NULL, rating TEXT NOT NULL)',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const insertAnimeWacth = (id, name, img, date, duracion, categoria, descripcion, rating) => {
    const promise = new Promise((resolve, reject) => {
        dbWatch.transaction(tx => {
            tx.executeSql(
                "INSERT INTO animesWatchList (id, name, img, date, duracion, categoria, descripcion, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [id, name, img, date, duracion, categoria, descripcion, rating],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    })
    return promise
}

export const deleteAnimeWatch = (id) => {
    const promise = new Promise((resolve, reject) => {
        dbWatch.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM animesWatchList WHERE id = ?',
                [id],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });
    return promise;
};

export const fetchAnimeWatch = () => {
    const promise = new Promise((resolve, reject) => {
        dbWatch.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM animesWatchList",
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });
    return promise;
};
