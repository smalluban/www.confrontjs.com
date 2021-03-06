import React, { Component } from 'react';

import PersonAvatar from '../components/person-avatar';
import AgendaIcon from '../components/agenda-icon';

let agenda = require('../data/agenda');
agenda = Object.keys(agenda).map((time) => {
    agenda[time].time = time;
    return agenda[time];
});

class AgendaComponent extends Component {
    render() {
        return (
            <div className="bg-success text-white">
                <section className="container jumbotron" id="agenda">
                    <h2 className="mb-5 h2">Agenda</h2>

                    { agenda.map((item, index) =>
                        <div className="row" key={ index }>
                            <div className="col-lg-2 pb-4 text-center d-flex align-items-center">
                                <span className="display-4">
                                    { item.time }
                                </span>
                            </div>
                            <div className="col-lg-3 py-4 text-center">
                                { item.speakers &&
                                    <PersonAvatar person={ item.speakers[0] } />
                                }
                                { !item.speakers &&
                                    <AgendaIcon title={ item.title } />
                                }
                            </div>
                            <div className="col-lg-7 pt-4">
                                { item.tags && item.tags.map((tag, index) =>
                                    <span
                                        className="badge badge-warning mr-1"
                                        key={ index }
                                    >
                                        { tag }
                                    </span>
                                )}

                                { item.speakers &&
                                    <h3 className="h3">
                                        { item.speakers[0].name }
                                    </h3>
                                }

                                <h2 className="h2">
                                    { item.title }
                                </h2>

                                <div
                                        className="abstract"
                                        dangerouslySetInnerHTML={{__html: item.abstract }}
                                >
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        );
    }
}

export default AgendaComponent;