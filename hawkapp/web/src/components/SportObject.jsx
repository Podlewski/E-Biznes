import React, { Component } from "react";
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";
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
      onTimeRangeSelected: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(modal) {
          dp.clearSelection();
          if (!modal.result) { return; }
          dp.events.add(new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          }));
        });
      },
      eventDeleteHandling: "Update",
      onEventClick: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Update event text:", args.e.text()).then(function(modal) {
          if (!modal.result) { return; }
          args.e.data.text = modal.result;
          dp.events.update(args.e);
        });
      },
    };
  }

  componentDidMount() {
    // load event data
    this.setState({
      startDate: "2020-06-15",
      events: [
        {
          id: 1,
          text: "Event 1",
          start: "2020-06-16T10:30:00",
          end: "2020-06-16T13:00:00"
        },
        {
          id: 2,
          text: "Event 2",
          start: "2020-06-17T12:00:00",
          end: "2020-06-17T14:00:00",
          backColor: "#38761d"
        }
      ]
    });
  }

  render() {
    var {...config} = this.state;
    return (
      <>
        <LoggedNavigation />
        <div className="wrapper-2">
          <div class="object-wrapper">
            <div class="row pb-5">
              <div class="col-sm">
                <div class="block">
                  <h5>Object Name</h5>
                  <h4>???</h4>
                </div>
                <div class="block">
                  <h5>Sport type</h5>
                  <h4>???</h4>
                </div>
                <div class="block">
                  <h5>Address</h5>
                  <h4>???</h4>
                </div>
                <div class="block">
                  <h5>Animator</h5>
                  <h4>???</h4>
                  <small>Report animator</small>
                </div>
              </div>
              <div class="col-sm">
                Graphics?
              </div>
            </div>
            <div>
              <div style={styles.left}>
                <DayPilotNavigator
                  selectMode={"week"}
                  showMonths={3}
                  skipMonths={3}
                  weekStarts={1}
                  onTimeRangeSelected={ args => {
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

export default SportObject;