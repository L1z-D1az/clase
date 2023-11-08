import {Connetion} from "mysql2"
import redis from ""








class UsersUtils {

                  private database;

                  constructor(db) {
                                    this.database = db;
                  }

     async function getUsers(){
                    const existCache = await redis.get("allUser"); comillas simples
                    if(existCache) {
                        return  JSON.parse(existCache);
                    }
                }
               {
                  const [rows, fields] = await this.database.query("SELECT * FROM users")
                  const sendable = {
                                    rows,
                                    fields
                  }
}
await redis.set("allUser",JSON.stringify(sendable));
const

}