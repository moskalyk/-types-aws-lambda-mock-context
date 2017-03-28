import context = require('aws-lambda-mock-context');
import * as Alexa from 'alexa-sdk';

const launchRequestJson: any = {
  request: {
    locale: "en-US",
    requestId: "amzn1.echo-api.request.[unique-value-here]",
    timestamp: "2016-10-27T18:21:44Z",
    type: "LaunchRequest"
  },
  session: {
    application: {applicationId: "amzn1.ask.skill.bf17d55e-5f5f-4cb6-a89a-e0177f6b7fce"},
    attributes: {},
    new: false,
    sessionId: "amzn1.echo-api.session.[unique-value-here]",
    user: {userId: "amzn1.ask.account.[unique-value-here]"},
  },
  version: "1.0"
};

const ctx = context();
let alexa: Alexa.AlexaObject = null;
alexa = Alexa.handler(launchRequestJson, ctx);
