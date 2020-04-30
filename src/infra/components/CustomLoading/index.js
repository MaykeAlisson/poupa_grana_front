import React from 'react';
import {Fragment} from 'react';
import {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './index.css';

const comCustomLoading = WrappedComponent => {

    return class extends Component {

        constructor(props) {

            super(props);

            this.state = {
                exibir: false
            };

            // https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
            this._isMounted = true;
        }

        componentDidMount() {

            this._isMounted = true;
        }

        componentWillUnmount() {

            this._isMounted = false;
        }

        loading = exibir => this._isMounted && this.setState({exibir});

        render() {

            return (
                <div>
                <Fragment>
                    {
                        this.state.exibir &&
                        (
                            <CircularProgress
                                size={50}
                                variant='indeterminate'
                                style={{
                                    position: 'absolute',
                                    zIndex: '9999',
                                    top: "46%",
                                    left: "48%",
                                }}
                            />
                        )
                    }

                    <div className={this.state.exibir ? 'customLoading' : ''}>
                        <WrappedComponent
                            loading={this.loading}
                            {...this.props}
                        />
                    </div>

                </Fragment>
                </div>
            );
        }
    }
};

export default comCustomLoading;
