/*
To make a PBJ we have a couple of steps to do:

Step 1. Grab 2 slices of bread
Step 2. Put peanut Butter on 1 slice
Step 3. Put jelly on another slice of bread
Step 4. Eat the PB and J!
Step 5. null

*/

const grabBread = 'Grab 2 slices of bread'
const peanutButter = 'Put peanut Butter on 1 slice'
const jelly = 'Put jelly on another slice of bread'
const eat = 'Eat the PB and J!'


const makePBJ = {
    firstStep: {
        action: grabBread,
        nextStep: {
            action: peanutButter,
            nextStep: {
                action: jelly,
                nextStep: {
                    action: eat,
                    nextStep: null
                }
            }
        }
    }
}


function makeSandwich() {

    let currentStep = makePBJ.firstStep
    while (currentStep) {
        console.log(currentStep.action);
        currentStep = currentStep.nextStep
    }

}

function addHead(newAction) {
    let newS = { action: newAction, nextStep: null };
    let oldFirstStep = makePBJ.firstStep;
    newS.nextStep = oldFirstStep;
    makePBJ.firstStep = newS
}

function addStep(newAction) {
    let newStep = { action: newAction, nextStep: null };
    let currentStep = makePBJ.firstStep;
    while (currentStep) {

        if (currentStep.action === jelly) {
            let oldStep = currentStep.nextStep;
            newStep.nextStep = oldStep;
            currentStep.nextStep = newStep;
            currentStep = currentStep.nextStep
        } else {
            currentStep = currentStep.nextStep
        }
    }
    makeSandwich()
}

addHead('Buy Ingredients')
makeSandwich()
// addStep('Cut the Sandwich in half')
