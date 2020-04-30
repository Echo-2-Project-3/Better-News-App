// class App extends Component {
//     state = {
//       avatars: [],
//       userName: ""
//     };
//     componentDidMount() {
//       // this.getAvatars();
//     }
  
//     getAvatars = () => {
//       axios
//         .get("/api/avatar")
//         .then((res) => {
//           console.log("res", res);
//           this.setState({
//             avatars: res.data.asset_ids,
//           });
//         })
//         .catch((err) => {
//           console.log("the err", err);
//         });
//     };

//     render return