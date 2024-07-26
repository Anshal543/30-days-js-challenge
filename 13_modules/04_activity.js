import _ from 'lodash';
import axios from "axios";

const string = 'hello, world!';
const result = _.capitalize(string);
console.log(result);

axios.get("https://jsonplaceholder.typicode.com/todos")
.then((res) => console.log(res.data))
.catch(e => console.log(e));