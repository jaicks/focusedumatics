import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    HandleClick = (data) =>{
        this.props.history.push(data)
    }
    render() {
        console.log(this.props);
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">FocusEduMatics</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className={this.props.active_link ==="first"?"nav-link active":"nav-link"} onClick={()=>this.HandleClick('/')}>Page First <span class="sr-only">(current)</span></a>
                        <a className={this.props.active_link ==="second"?"nav-link active":"nav-link"} onClick={()=>this.HandleClick('/secondpage')}>Page Second</a>
                        <a className={this.props.active_link ==="third"?"nav-link active":"nav-link"} onClick={()=>this.HandleClick('/thirdpage')}>Page Third</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;