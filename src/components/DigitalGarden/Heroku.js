import React from "react";

const Heroku = () => (
  <div>
    <h3>Export database from Heroku</h3>
    <div>1. Create backup</div>
    <code>{`heroku pg:backups:capture --app <heroku_app_name>`}</code>
    <div>2. Download backup</div>
    <code>{`heroku pg:backups:download --app <heroku_app_name>`}</code>
  </div>
);

export default Heroku;
