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

class EditSportObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewType: "Week",
      durationBarVisible: true,
      timeRangeSelectedHandling: "Enabled",
      onBeforeEventRender: args => {
        args.data.areas = [
          { top: 6, right: 10, width: 12, height: 14, icon: "icon-triangle-down", visibility: "Visible", action: "ContextMenu", style: "font-size: 12px; background-color: #fff; border: 1px solid #ccc; border-radius: 5px; padding: 3px 3px 0px 3px; cursor:pointer;" }
        ];
        args.data.borderColor = "darker";
      },
      contextMenu: new DayPilot.Menu({
        items: [
          {
            text: "Delete",
            onClick: args => {
              var e = args.source;

              var jsonStatus = { status: "CANCELLED" }

              fetch('http://localhost:8080/reservation/' + e.data.id,
                {
                  method: 'PATCH',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(jsonStatus)
                }).then((response) => {
                  if (response.ok) {
                    e.backColor = "#f5799b"
                    this.calendar.events.remove(e)
                    this.calendar.events.add({
                      id: e.data.id,
                      text: e.data.text,
                      start: e.data.start,
                      end: e.data.end,
                      backColor: "#f5788b"
                    })
                  }
                })
            }
          }
        ]
      })
    };
  }

  pictogram(sport) {

    const picStyle = { height: 225 };

    switch (sport) {
      case "Baseball":
        return <img src={"/pic/baseball.jpg"} alt="Baseball pictogram" style={picStyle} />
      case "Basketball":
        return <img src={"/pic/basketball.jpg"} alt="Basketball pictogram" style={picStyle} />
      case "Dance":
        return <img src={"/pic/dance.jpg"} alt="Dance pictogram" style={picStyle} />
      case "Golf":
        return <img src={"/pic/golf.jpg"} alt="Golf pictogram" style={picStyle} />
      case "Volleyball":
        return <img src={"/pic/volleyball.jpg"} alt="Volleyball pictogram" style={picStyle} />
      default:
        return <></>
    }

  }

  componentDidMount() {
    this.fillData();
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
              phone: result.phone,
              reservations: result.reservations,
              price: result.price
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
      if (reservation.status === "PAYED") {
        events.push({
          id: reservation.id,
          text: "Reservation " + reservation.id,
          start: reservation.reservationDate,
          end: reservation.endDate,
          backColor: "#6eb1f0"
        })
      } else if (reservation.status === "CANCELLED") {
        events.push({
          id: reservation.id,
          text: "Reservation " + reservation.id,
          start: reservation.reservationDate,
          end: reservation.endDate,
          backColor: "#f5788b"
        })
      } else {
        events.push({
          id: reservation.id,
          text: "Reservation " + reservation.id,
          start: reservation.reservationDate,
          end: reservation.endDate,
          backColor: "#92f09c"
        })
      }
    })
    this.setState({
      startDate: "2020-06-15",
      events: events
    }
    )
  }

  render() {
    var { ...config } = this.state;
    return (
      <>
        <LoggedNavigation />
        <div className="wrapper-2">
          <div class="object-wrapper">
            <div class="row pb-5">
              <div class="col-sm">
                <div class="block">
                  <h5 className="h5-grey">Object Name</h5>
                  <h4>{this.state.name}</h4>
                </div>
                <div class="block">
                  <h5 className="h5-grey">Sport type</h5>
                  <h4>{this.state.sport}</h4>
                </div>
                <div class="block">
                  <h5 className="h5-grey">Address</h5>
                  <h4>{this.state.address}</h4>
                </div>
                <div>
                  <h5 className="h5-grey">Phone number</h5>
                  <h4>{this.state.phone}</h4>
                </div>
              </div>
              <div class="col-sm">
                <div class="block">
                  <h5 className="h5-grey">Price</h5>
                  <h4>{this.state.price} PLN/H</h4>
                </div>
                {this.pictogram(this.state.sport)}              </div>
            </div>
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

export default withRouter(EditSportObject);