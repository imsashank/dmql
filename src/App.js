import React, {useState, useRef} from 'react';
import './App.css';
import { render } from 'react-dom';
import axios from 'axios'
import Table from './Table'

function App() {
  const queryString =  useRef()
  const url = "http://localhost:8080/admin/execute"
  const getUrl = "http://localhost:8080/admin/execute/get"
  const tableName = ""
  const[value, setValue] = useState('')
  const handleQuery = (e) => {
      const user_query = queryString.current.value 
      if(user_query === '') return
      console.log(user_query)
     // query.current.value = null

      axios.post(url, 
        {
          query: user_query
        }
      )
      .then(res => {
          setValue({value: res.data})
      
        }
      )
      .catch(
        err => 
            console.log(err)
      )
  }

console.log(value);

  return (
    <>
      <h1 class = "h1"> Enter Query</h1>
      <input ref = {queryString} type="text" class = "myInput" />
      <button onClick = {handleQuery} class = "myButton">  Execute Query </button> 
   
    {value && <Table data={value} />}
    </>
  )
      
  
}

//console.log(Object.keys(data.value.admins[0]))

export default App;



// import React, {useState, useEffect} from "react";
// import "./App.css";
// import axios from 'axios'

// function Callabove(){
// const [data, setData] = useState([]);
// const api = "http://localhost:8080";

// useEffect(() => {
//   axios
//     .get(`${api}/admin/execute/get`)
//     .then((res) => {
//       console.log("Data", res.data);
//       setData(res.data);
//     })
//     .catch((err) => console.log(err));
// }, []);

// }
// export default class App extends React.Component {
  
//   state = {
//     columns: [],
//     columnsToHide: ["_id"],
//     results:  []
//   }
  

  
//   componentDidMount() {
//     this.mappDynamicColumns();
//   }



//   addTableRow = (result) => {
    
//     let row = [];
//     Array.from(this.state.columns).forEach((col) => {
//       if (!this.state.columnsToHide.includes(col)) {
//         row.push(
//           Object.keys(result).forEach((item) => {
//             if (result[item] && item === col) {
//               return result[item];
//             } else if (item === col) {
//               return "No Value";
//             }
//           })
//         );
//         row = this.filterDeepUndefinedValues(row);
//       }
//     });

//     return row.forEach((item, index) => {
//       // console.log(item, "item ?");
//       return (
//         <td
//           key={`${item}--${index}`}
//           className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
//         >
//           {item}
//         </td>
//       );
//     });
//   };

//   mapTableColumns = () => {
//     return Array.from(this.state.columns).forEach((col) => {
//       if (!this.state.columnsToHide.includes(col)) {
//         const overridedColumnName = this.overrideColumnName(col);
//         return (
//           <th
//             key={col}
//             scope="col"
//             className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//           >
//             {overridedColumnName}
//           </th>
//         );
//       }
//     });
//   };

//   filterDeepUndefinedValues = (arr) => {
//     return arr
//       .map((val) =>
//         val.map((deepVal) => deepVal).filter((deeperVal) => deeperVal)
//       )
//       .map((val) => {
//         if (val.length < 1) {
//           val = ["-"];
//           return val;
//         }
//         return val;
//       });
//   };

//   // if you want to change the text of the col you could do here in the .map() with another function that handle the display text

//   overrideColumnName = (colName) => {
//     switch (colName) {
//       case "phoneNumber":
//         return "Phone number";
//       case "lastname":
//         return "Custom Last Name";
//       default:
//         return colName;
//     }
//   };

//   createTable = (results) => {
//     return (
//       <table class="min-w-full divide-y divide-gray-200">
//         <thead>
//           <tr>{this.mapTableColumns()}</tr>
//         </thead>
//         <tbody>
//           {results.map((result, index) => {
//             return <tr key={result._id}>{this.addTableRow(result)}</tr>;
//           })}
//         </tbody>
//       </table>
//     );
//   };

//   render() {
//     return (
//       <div className="flex flex-col">
//         <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//             <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//               {this.state.results.length ? (
//                 <div className="card">
//                   {this.createTable(this.state.results)}
//                 </div>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
