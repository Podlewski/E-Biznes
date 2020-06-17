import React, { Component } from "react";
import { DayPilot, DayPilotCalendar, DayPilotNavigator } from "daypilot-pro-react";
import { withRouter } from "react-router-dom";
import { LoggedNavigation } from "./index.js"
import "./SportObject.css";
import "./Login.css";

const styles = {
  left: {
    float: "left"
  },
  main: {
    marginLeft: "220px"
  }
};

class SportObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewType: "Week",
      durationBarVisible: true,
      timeRangeSelectedHandling: "Enabled",
    };
  }

  componentDidMount() {
    this.fillData();
    this.addReservationCreator();
  }

  fillData() {

    fetch('http://localhost:8080/facility/' + this.props.match.params.id,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        if (response.ok) {
          response.json().then((result) => {
            this.setState({
              name: result.name,
              address: result.address,
              sport: result.sport.name,
              phoneNumber: result.phoneNumber,
              reservations: result.reservations
            })
            this.fillEvents(this.state.reservations);
          })
        }
        else {
          this.props.history.push('/searchObjects');
        }
      })
  }

  fillEvents(reservations) {
    const events = []
    reservations.map((reservation) => {
      events.push({
        id: reservation.id,
        text: "Reservation " + reservation.id,
        start: reservation.reservationDate,
        end: reservation.endDate
      })
    })
    this.setState({
      startDate: "2020-06-15",
      events: events
    }
    )
  }

  addReservationCreator() {
    const id = this.props.match.params.id;

    this.setState({
      error: false,
      onTimeRangeSelected: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Create a new reservation:").then(function (modal) {
          dp.clearSelection();
          if (!modal.result) { return; }

          var reservation = {
            facilityId: id,
            userId: localStorage.getItem("userId"),
            reservationDate: args.start,
            endDate: args.end
          }
          fetch('http://localhost:8080/reservation',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(reservation)
            }).then((response) => {
              if (response.ok) {
                console.log(response)
                dp.events.add(new DayPilot.Event({
                  start: args.start,
                  end: args.end,
                  id: DayPilot.guid(),
                  text: modal.result
                }));
              }             
            })
        });
      },
    })
  }

  render() {
    var { ...config } = this.state;

    // if (localStorage.getItem('reservationError')==='true') {
    //   errorMsg =
    //     <article class="message is-danger">
    //       <div class="message-header">
    //         <p>Cannot create reservation</p>
    //         <button class="delete" aria-label="delete"></button>
    //       </div>
    //       <div class="message-body">
    //         <strong>{this.state.errorMsg}</strong>
    //       </div>
    //     </article>
    // }

    return (
      <>
        <LoggedNavigation />
        <div className="wrapper-2">
          <div class="object-wrapper">
            <div class="row pb-5">
              <div class="col-sm">
                <div class="block">
                  <h5>Object Name</h5>
                  <h4>{this.state.name}</h4>
                </div>
                <div class="block">
                  <h5>Sport type</h5>
                  <h4>{this.state.sport}</h4>
                </div>
                <div class="block">
                  <h5>Address</h5>
                  <h4>{this.state.address}</h4>
                </div>
                <div class="block">
                  <h5>Phone number</h5>
                  <h4>{this.state.phoneNumber}</h4>
                </div>
              </div>
              <div class="col-sm">
                Graphics?
              </div>
            </div>
            {/* {errorMsg} */}
            <div>
              <div style={styles.left}>
                <DayPilotNavigator
                  selectMode={"week"}
                  showMonths={3}
                  skipMonths={3}
                  weekStarts={1}
                  onTimeRangeSelected={args => {
                    this.setState({
                      startDate: args.day
                    });
                  }}
                />
              </div>
              <div style={styles.main}>
                <DayPilotCalendar
                  timeFormat={"Clock24Hours"}
                  cellDuration={30}
                  cellHeight={22}
                  weekStarts={1}
                  businessBeginsHour={7}
                  businessEndsHour={23}
                  dayBeginsHour={7}
                  dayEndsHour={23}
                  eventMoveHandling={"Disabled"}
                  headerDateFormat={"dd.MM.yyyy"}
                  {...config}
                  ref={component => {
                    this.calendar = component && component.control;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(SportObject);