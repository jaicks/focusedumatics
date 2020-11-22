import React, { Component } from "react";
import Header from "./Header";
import Hitler_and_Mussolini from "../Hitler_and_Mussolini.jpg";
import Rhine_River from "../Rhine_River.jpg";
class ThirdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <Header active_link="third" {...this.props} />
        <h3 className="mt-3">Moderate Policing Policy</h3>
        <div className="row mt-3 ">
          <div className="col page3">
            Rearming the German military was the first major task in Hitler’s
            foreign policy. This created jobs in both the military and industry,
            helping to thwart the effects of the Great Depression. Hitler
            introduced national service, requiring all young men to spend six
            months in the Reich Labor Service, after which they faced
            conscription into the military. In January 1935, the Saar coalfields
            were allowed a plebiscite, per the Treaty of Versailles, which
            resulted in 90 percent of the population voting to return to
            Germany. In 1935, Hitler revealed that he had rebuilt the air force
            and signed the Anglo-German Naval Agreement, which allowed him to
            enlarge his naval forces.
            <img src={Hitler_and_Mussolini} className="third-img" />
            <p className="mb-2">©Universal History Archive. Hitler and Mussolini, 1938.
              Britannica, ImageQuest, 2020.</p>
              <div>
              The Rhineland, a key area for German industry, was a natural
              border between Germany and France as the Rhine River was a
              challenging obstacle for troops to cross. One part of the Treaty
              of Versailles forbade the Germans from keeping military forces
              there. Hitler did not like this condition as it made Germany
              vulnerable to invasion. In 1936, Hitler boldly marched 22,000
              German soldiers into this region, in direct violation of the
              Treaty of Versailles. To assuage Britain and France, he offered a
              25-year nonaggression pact, claiming Germany had no more
              territorial interests. This is another example of how Hitler
              tailored his speeches to his audience
            </div>
          </div>
          <div className="col page3">
            <img src={Rhine_River} className="third-img" />
             <p className="mb-2">©Roy Rainford. Rheinstein Castle, 20th century. Britanncia,
              ImageQuest, 2020.</p> 
              <br />
              <div>
              <ul>
                <strong> Results of rearmament:</strong>
                <li>
                  France continued building and fortifying the Maginot Line in
                  preparation for a future conflict with Germany.
                </li>
                <li>
                  The German economy rebounded as Hitler implemented same public
                  works projects and programs like those in Franklin Roosevelt’s
                  New Deal.
                </li>
                <li>
                  The lack of opposition from the League of Nations highlighted
                  its weakness and made Hitler bolder in his future plans.
                </li>
                <strong>Something to consider:</strong> What specific actions
                could the League of Nations have implemented to respond to
                Hitler at this stage?
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdPage;
