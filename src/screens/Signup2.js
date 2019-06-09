import React from 'react';
import firebase from '../config/firebase'

class Signup2 extends React.Component {
  constructor() {
    super();
    this.state = {
    emailVerify : false,
    loader:false
  }
}


  getValue = e => {
    const fieldName = e.target.name;
    const value = e.target.value
    this.setState({[fieldName]:value})
  }

  validation() {
    const {fullName, email,gender,age,country,city,password,conPassword} = this.state
  }



  SignUp = () => {
    const {fullName, email,gender,age,country,city,password,conPassword,emailVerify} = this.state
    this.setState({loader : true})
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(success=> {
      firebase.auth().onAuthStateChanged(function(user) {
        console.log(user)
    
        if(!user.emailVerified) {
            console.log('not verified')
            user.sendEmailVerification().then(()=>{
                console.log('verification send sucess fully')
            })
            .catch(error =>{
              this.setState({loader : false})              
              console.log('error',error.message)
          }); 
        }
    })
      
      firebase.database().ref('user/'+success.user.uid).set(this.state)
      .then(suc=>{
        console.log(suc)

      })
      .catch(e=>{
        console.log('database error',e.message)
        this.setState({loader : false})
        
      })
    })
    .catch(function(error) {
      // Handle Errors here.
      this.setState({loader : false})
      var errorMessage = error.message;
      console.log('singup error',errorMessage)
    });
  }


  render() {
    const {fullName, email,gender,age,country,city,password,conPassword,emailVerify,loader} = this.state

    console.log(this.state)
    return (
          <div className="App">
          <h2>Signup</h2>
            <header className="App-header">
                <input type='text' name='fullname' placeholder='fullName' onChange={this.getValue}/>
                <span style={{color:'red',fontSize:'9px'}}></span>
                <br /><br />
                <input type='email' name='email' placeholder='Email' onChange={this.getValue}/>
                <span style={{color:'red',fontSize:'9px'}}></span>
                <br /><br />
                <input type='text' name='gender' placeholder='gender' onChange={this.getValue}/>
                <span style={{color:'red',fontSize:'9px'}}></span>
                <br /><br />
                <input type='text' name='age' placeholder='Age' onChange={this.getValue}/>
                <span style={{color:'red',fontSize:'9px'}}></span>
                <br /><br />
                <input type='text' name='country' placeholder='country' onChange={this.getValue}/>
                <span style={{color:'red',fontSize:'9px'}}></span>
                <br /><br />
                <input type='text' name='city' placeholder='City' onChange={this.getValue}/>
                <span style={{color:'red',fontSize:'9px'}}></span>
                <br /><br />
                <input type='password' name='password' placeholder='Password' onChange={this.getValue}/>
                <span style={{color:'red',fontSize:'9px'}}></span>
                <br /><br />
                <input type='password' name='conPassword' placeholder='Password' onChange={this.getValue}/>
                <span style={{color:'red',fontSize:'9px'}}></span>
                <br /><br />
                {loader && 
                <div>
                  <i className="fas fa-spinner fa-spin" style={{color:"red"}}></i><span style={{marginLeft:"10px",fontFamily: "'Ubuntu', sans-serif",fontWeight: "normal",color: "#34495e"}}>PLEASE WAIT...</span>
                </div>}
                <br /><br />
                <button onClick={this.SignUp}>Signup</button>
            </header>
          </div>
    );
  }
}

export default Signup2;
