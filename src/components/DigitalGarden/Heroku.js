import React from "react";
import styles from "./shared.module.scss";

const Heroku = () => (
  <>
    <div className={styles["block"]}>
      <h3>Export database from Heroku</h3>
      <div className={styles["action"]}>1. Create backup</div>
      <div
        className={styles["code"]}
      >{`heroku pg:backups:capture --app <heroku_app_name>`}</div>
      <div className={styles["action"]}>2. Download backup</div>
      <div
        className={styles["code"]}
      >{`heroku pg:backups:download --app <heroku_app_name>`}</div>
    </div>

    <div className={styles["block"]}>
      <h3>Restore dump to local database</h3>
      <div
        className={styles["code"]}
      >{`pg_restore --verbose --clean --no-acl --no-owner -h localhost -U <postgres_username> -d <database> latest.dump`}</div>
    </div>
  </>
);

export default Heroku;
