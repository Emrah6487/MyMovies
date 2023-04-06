import React from "react";

class SearchBar extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    
    render () {
        console.log(this.props.searcMovieProp)

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input onChange={this.props.searcMovieProp} type="text" className="form-control" placeholder="Search" />
                    </div>
                </div>
            </form>
        )
    }
}
export default SearchBar;