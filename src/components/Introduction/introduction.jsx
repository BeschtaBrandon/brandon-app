import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="code_break.jpg" size={150}/>
            <p className="introduction-text">
              Passionate about the everlasting need to aquire new skills and stretching
              beyond one's comfort zone to try something new.
              The world is your oyster, life is what you make of it. :)
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
