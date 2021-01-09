import React, { Component } from 'react'  
  
export class Home extends Component {  
    render() {  
        return (  
            <div>  
			<form id="signup-form" method="post" action="#">
				<input type="email" name="email" id="email" placeholder="email" />
				<input type="submit" value="submit" />
			</form>
            </div>  
        )  
    }  
}  
  
export default Home  