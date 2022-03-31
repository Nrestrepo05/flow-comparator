const log = require("log-beautify");
const prompt = require("prompt-sync")();

const input = prompt("Please paste the flows: ");
console.log(" ");

const compareFlows = () => {
  try {

    const flows = input.split("Bot path should be")[1].split("It was");
    const expectedFlow = flows[0].trim().split(" ");
    const actualFlow = flows[1].trim().split(" ");
    let largerFlowLength = 0;
    let sameFlow = [];
    let differenceExpectedFlow = [];
    let differenceActualFlow = [];
  
    if (expectedFlow.length <= actualFlow.length) {
      largerFlowLength = actualFlow.length;
    } else {
      largerFlowLength = expectedFlow.length;
    }

    for (let i = 0; i <= largerFlowLength; i++) {
      if (expectedFlow[i] === actualFlow[i]) {
        sameFlow.push(expectedFlow[i]);
      } else {
        differenceExpectedFlow = expectedFlow.slice(i).join(" ");
        differenceActualFlow = actualFlow.slice(i).join(" ");
        break;
      }
    }
  
    if (sameFlow.length > 0) {
      log.success_("SAME FLOW ");
      log.success(sameFlow.join(" "));
      console.log(" ");
    }
    if (differenceExpectedFlow.length > 0) {
      log.error_("DIFFERENCE EXPECTED FLOW ");
      log.error(differenceExpectedFlow);
      console.log(" ");
    }
    if (differenceActualFlow.length > 0) {
      log.error_("DIFFERENCE ACTUAL FLOW ");
      log.error(differenceActualFlow);
    }
    if (differenceExpectedFlow.length <= 0 && differenceActualFlow.length <= 0) {
      log.success_("Flows are the same!");
      console.log(" ")
    }
  } catch (error) {
    log.error("Sorry, there was an error")
    log.error(error.message)
  }
};

compareFlows();
