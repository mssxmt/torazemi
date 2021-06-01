import React from 'react';
import Article from './Article';

class Blog extends React.Compornent {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Article />
            </div>
        )
    }
}

export default Blog;