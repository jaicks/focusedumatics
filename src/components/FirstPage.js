import React, { Component } from "react";
import Header from "./Header";

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <Header active_link="first" {...this.props} />
        <h1 className="mt-3 mb-3">Crisis in Manchuria</h1>
        <div className="button-container mt-3">
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal1"
          >
            Wanpaoshan Incident
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal2"
          >
            Mukden Incident
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal3"
          >
            Military Usurpation
          </button>
        </div>

        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {" "}
                  Wanpaoshan Incident
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {/* <h1>Crisis in Manchuria</h1> */}
                {/* <h3>Wanpaoshan Incident</h3> */}
                <ul>
                  <li>
                    A group of ethnic Koreans (under Japanese protection) leased
                    a large swath of land in the village, and dug a long ditch
                    across areas not covered in their lease and owned by local
                    Chinese farmers.
                  </li>
                  <li>
                    The Chinese farmers protested to local authorities, who
                    dispatched the police to the area. They instructed the
                    Koreans to stop construction and to leave the area.
                  </li>
                  <li>
                    The Japanese sent their own police to the area to protect
                    the Koreans and even fired on a crowd of protesting Chinese
                    farmers. There were no casualties.
                  </li>
                  <li>
                    Anti-Korean riots erupted all over China, and the hatred of
                    Koreans increased dramatically. In addition to holding
                    anti-Korean sentiments, the Chinese massacred thousands of
                    Koreans and looted their homes.
                  </li>
                  <li>
                    The Japanese and Chinese never reached a resolution of the
                    issue.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Mukden Incident
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ul>
                  <li>
                    In September 1931, a Japanese lieutenant planted a small
                    charge of dynamite close to a Chinese railway line that fed
                    into the South Manchuria Railway.
                  </li>
                  <li>
                    The explosion was so weak that it did not destroy the track
                    and a train passed over it just minutes later.
                  </li>
                  <li>
                    The Japanese Army blamed the Chinese dissidents for the
                    explosion and responded with a full invasion of troops.{" "}
                  </li>
                  <li>Japan founded a puppet state months later. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div
          class="modal fade"
          id="exampleModal3"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {" "}
                  Military Usurpation
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ul>
                  <li className="">
                    The Japanese government decided to localize the incident and
                    not continue the invasion farther inland in China.
                  </li>
                  <li>
                    The Kwantung Army commander in chief, however, ordered his
                    forces to extend the length of the South Manchuria Railway;
                    the military captured and occupied virtually every city
                    along the 730-mile railway.
                  </li>
                  <li>
                    With victory after victory being reported in the press and
                    throughout Japan, the emperor and the government felt
                    powerless to oppose the Army because without their support
                    the government would collapse.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
