import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap/bootstrap.css';
//import FontAwesome from 'react-fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faplus from '@fortawesome/fontawesome-free-solid/faPlus';
import finish from '@fortawesome/fontawesome-free-solid/faTimesCircle';

class Default extends Component {
    constructor(props) {
        super(props);
        this.state = {
            happyCommentList: [],
            mehCommentList: [],
            sadCommentList: [],
            actionList: []
        };
        this.addHappyComment = this.addHappyComment.bind(this);
        this.addMehComment = this.addMehComment.bind(this);
        this.addSadComment = this.addSadComment.bind(this);
        this.addAction = this.addAction.bind(this);
        this.deleteAction = this.deleteAction.bind(this);
        this.completeComment = this.completeComment.bind(this);
    }

    addHappyComment(event) {
        event.preventDefault();
        var commentString = this.happyInput.value;
        if (commentString.trim() !== '') {

            this.setState({ happyCommentList: this.state.happyCommentList.concat(commentString) });
        }
        this.happyInput.value = '';
    }

    addMehComment(event) {
        event.preventDefault();
        var commentString = this.mehInput.value;
        if (commentString.trim() !== '') {

            this.setState({ mehCommentList: this.state.mehCommentList.concat(commentString) });
        }
        this.mehInput.value = '';
    }

    addSadComment(event) {
        event.preventDefault();
        var commentString = this.sadInput.value;
        if (commentString.trim() !== '') {

            this.setState({ sadCommentList: this.state.sadCommentList.concat(commentString) });
        }
        this.sadInput.value = '';
    }

    addAction(event){
        event.preventDefault();
        var actionString = this.actionInput.value;
        if (actionString.trim() !== '') {
            this.setState({ actionList: this.state.actionList.concat(actionString) });
        }
        this.actionInput.value = '';
    }

    deleteAction(event, label){
        var index = this.state.actionList.indexOf(label);
        this.state.actionList.splice(index, 1);
        this.setState({actionList: this.state.actionList});
    }

    completeComment(event, label) {
        //var labelToDisable = document.getElementById('happy-comment-' + id);
        return label.classList.add('disabled-label');
    }
    render() {
        const addPlusElement = <FontAwesomeIcon icon={faplus} />
        const finishElement = <FontAwesomeIcon icon={finish} />
        return (

            <div className="container ">
                <div className="row ">
                    <div className="col-md-4 card feeling-card" id="happy-col">

                        <form id='happy-form' className="row comment-input-field" onSubmit={this.addHappyComment} >
                            <input id='happy-comment-input' className="form-control col-md-10" type="text" ref={input => this.happyInput = input} />
                            <i id='fa-plus' className='col-md-2 ' onClick={this.addHappyComment}>
                                {addPlusElement}
                            </i>
                        </form>

                        {this.state.happyCommentList.map((comment, i) => {
                            return (
                                <div className='row' key={i}>
                                    <label id={'happy-comment-' + i} key={i} className='col-md-12 form-control'>
                                        {comment}
                                        <i className='float-right' onClick={() => this.completeComment(this, document.getElementById('happy-comment-' + i))}>
                                            {finishElement}
                                        </i>
                                    </label>
                                </div>
                            )
                        })}

                    </div>

                    <div className="col-md-4 card feeling-card" id="meh-col">

                        <form id='meh-form' className="row comment-input-field" onSubmit={this.addMehComment} >
                            <input id='meh-comment-input' className="form-control col-md-10" type="text" ref={input => this.mehInput = input} />
                            <i id='fa-plus' className='col-md-2 ' onClick={this.addMehComment}>
                                {addPlusElement}
                            </i>
                        </form>

                        {this.state.mehCommentList.map((comment, i) => {
                            return (
                                <div className='row' key={i}>
                                    <label id={'meh-comment-' + i} key={i} className='col-md-12 form-control'>
                                        {comment}
                                        <i className='float-right' onClick={() => this.completeComment(this, document.getElementById('meh-comment-' + i))}>
                                            {finishElement}
                                        </i>
                                    </label>
                                </div>
                            )
                        })}

                    </div>

                    <div className="col-md-4 card feeling-card" id="sad-col">

                        <form id='sad-form' className="row comment-input-field" onSubmit={this.addSadComment} >
                            <input id='sad-comment-input' className="form-control col-md-10" type="text" ref={input => this.sadInput = input} />
                            <i id='fa-plus' className='col-md-2 ' onClick={this.addSadComment}>
                                {addPlusElement}
                            </i>
                        </form>

                        {this.state.sadCommentList.map((comment, i) => {
                            return (
                                <div className='row' key={i}>
                                    <label id={'sad-comment-' + i} key={i} className='col-md-12 form-control'>
                                        {comment}
                                        <i className='float-right' onClick={() => this.completeComment(this, document.getElementById('sad-comment-' + i))}>
                                            {finishElement}
                                        </i>
                                    </label>
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className="row">
                    <div className='col-md-4'></div>

                    <div className="col-md-4 card" id="action-col">

                        <form id='action-form' className="row comment-input-field" onSubmit={this.addAction} >
                            <label className='form-control'>Actions</label>
                            <input id='action-input' className="form-control col-md-10" type="text" ref={input => this.actionInput = input} />
                            <i id='fa-plus' className='col-md-2 ' onClick={this.addaction}>
                                {addPlusElement}
                            </i>
                        </form>

                        {this.state.actionList.map((action, i) => {
                            return (
                                <div className='row' key={i}>
                                    <label id={'action-' + i} key={i} className='col-md-12 form-control' value={action}>
                                        {action}
                                        <i className='float-right' onClick={() => this.deleteAction(this, action)}>
                                            {finishElement}
                                        </i>
                                    </label>
                                </div>
                            )
                        })}

                    </div>

                    <div className='col-md-4'></div>
                </div>
            </div>

        );
    }
}

export default Default;
