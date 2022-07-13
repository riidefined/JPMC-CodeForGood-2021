// import React from "react";

// const AddEvent = () => {
 
  // state = {
  //   eventname: "",
  //   eventdesc: "",
  // };
//   add = (e) => {
//     e.preventDefault();
//     if (this.state.eventname === "" || this.state.eventdesc === "") {
//       alert("All the fields are mandatory!");
//       return;
//     }
//     this.props.addEventHandler(this.state);
//     this.setState({ eventname: "", eventdesc: "" });
//     this.props.history.push("/"); //Programmatically route from one component to another component
//   };
  
//   render() {
//     return (
//       <div className="main">
//         <h2>Add Event</h2>
//         <form className="form" onSubmit={this.add}>
//           <div className="feild">
//             <label>Event Name</label>
//             <input
//               type="text"
//               name="eventname"
//               placeholder="Name"
//               value={this.state.eventname}
//               onChange={(e) => this.setState({ eventname: e.target.value })}
//             />
//           </div>
//           <div className="feild">
//             <label>Event Description</label>
//             <input
//               type="text"
//               name="eventname"
//               placeholder="EventName"
//               value={this.state.eventdesc}
//               onChange={(e) => this.setState({ eventdesc: e.target.value })}
//             />
//           </div>

//           <button class="btn btn-primary">Add</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default AddEvent;
