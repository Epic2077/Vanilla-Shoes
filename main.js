import "./style.css";

import { users } from "./src/api/users";
console.log(users());
import { router } from "./src/routes/router";
router.resolve();
