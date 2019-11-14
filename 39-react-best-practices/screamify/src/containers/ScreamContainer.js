import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import ScreamListItem from '../components/ScreamListItem'
import SearchForm from '../components/SearchForm'
import NowPlaying from '../components/NowPlaying'
import TestForm from '../components/TestForm'
class ScreamContainer extends React.Component {

    state = {
        screams: [],
        term: "",
        displayedTitle: "",
        displayedScreamer: "",
        loading: true,
        number: 0
    }

    applyFilter = (filterTerm) => {

        // OVERWRITES STATE!
        // const filtered = this.state.screams.filter(scream => scream.title.includes(filterTerm))

        // this.setState({
        //   screams: filtered
        // })

        this.setState({
            term: filterTerm
        })
    }


    renderTiles = () => {
        const filteredScreams = this.state.screams.filter(scream => scream.title.includes(this.state.term))


        const components = filteredScreams.map(scream => {
            return (
                <Link to={`/screams/${scream.id}`} >
                    <ScreamListItem
                        key={scream.id}
                        title={scream.title}
                        screamer={scream.screamer}
                        duration={scream.duration}
                        color={scream.title === this.state.displayedTitle ? "red" : "white"}
                        setDisplayedTitle={this.setDisplayedTitle}
                    />

                </Link>

            )
        })

        return components
    }

    setDisplayedTitle = (newTitle, screamer) => {
        // this.setState({
        //   displayedTitle: newTitle,
        //   displayedScreamer: screamer
        // })

        this.setState({
            displayedTitle: newTitle,
            displayedScreamer: screamer
        })
    }

    componentDidMount() {
        this.fetchScreams()
    }

    fetchScreams = () => {
        fetch("http://localhost:3000/screams")
            .then(res => res.json())
            .then(data => {
                // NO NO mutating state
                // this.state.screams.push()

                // NO NO NO
                // this.forceUpdate()

                // triggers a rerender
                this.setState({
                    screams: data,
                    loading: false
                })
            })
    }

    addOne = () => {
        // setState is asynchronous because state changes are pooled meaning all the changes in all the setStates are gathered together before changing state and triggering rerender

        // if values of new state depend on old state, use functional setState

        this.setState(
            (prevState) => {
                return { number: prevState.number + 1 }
            },
            () => {
                console.log("AFTER", this.state.number)
            }
        )

        console.log("LINE AFTER", this.state.number)
    }

    renderBody = () => {
        if (this.state.loading) {
            console.log("true", this.state)
            return <div className="wrap">
                <div className="loading">
                    <div className="bounceball"></div>
                    <div className="text">NOW LOADING</div>
                </div>
            </div>
        } else {
            console.log("false", this.state)
            return (
                <Switch>

                    <Route path="/screams/:id" render={({ match }) => {
                        let scream = this.state.screams.find(scream => scream.id === parseInt(match.params.id))
                        console.log(scream)
                        return (
                            <div>
                                <ScreamListItem
                                    title={scream.title}
                                    screamer={scream.screamer}
                                    duration={scream.duration}
                                    color={scream.title === this.state.displayedTitle ? "red" : "white"}
                                    setDisplayedTitle={this.setDisplayedTitle}
                                />
                                <NowPlaying
                                    displayedTitle={this.state.displayedTitle}
                                    displayedScreamer={this.state.displayedScreamer}
                                />
                            </div>
                        )


                    }} />
                    <Route path="/screams" render={(routerProps) => {
                        return (<div className="center-container">
                            <div className="top-panel">
                                <TestForm />
                                <h1>Screams</h1>
                                <SearchForm applyFilter={this.applyFilter} term={this.state.term} />
                            </div >
                            <div className="scream-list">
                                <div className="tile header">
                                    <p>Title</p>
                                    <p>Screamer</p>
                                    <p>Duration</p>
                                </div>
                                {this.renderTiles()}
                            </div>
                        </div>)
                    }} />
                </Switch>



            )
        }
    }

    render() {
        return <>
            {this.renderBody()}
        </>
    }
}

export default ScreamContainer