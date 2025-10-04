// 🔹 Custom useState Implementation - Step by Step

// Level 1: Basic useState
let stateValue;
let reRenderFunction;

function useCustomState(initialValue) {
  // Initialize only once
  if (stateValue === undefined) {
    stateValue = initialValue;
  }
  
  function setState(newValue) {
    stateValue = newValue;
    // Trigger re-render (in real React, this updates Virtual DOM)
    if (reRenderFunction) reRenderFunction();
  }
  
  return [stateValue, setState];
}

// Level 2: With Batching (Simplified)
class SimpleBatch {
  constructor() {
    this.updates = [];
    this.isScheduled = false;
  }
  
  scheduleUpdate(updateFn) {
    this.updates.push(updateFn);
    
    if (!this.isScheduled) {
      this.isScheduled = true;
      // Batch all updates in next tick
      setTimeout(() => {
        this.flushUpdates();
      }, 0);
    }
  }
  
  flushUpdates() {
    this.updates.forEach(update => update());
    this.updates = [];
    this.isScheduled = false;
  }
}

const batcher = new SimpleBatch();

// Level 3: Advanced useState with Batching
let componentState = {};
let currentComponentId = 0;
let hookIndex = 0;

function useAdvancedState(initialValue) {
  const currentIndex = hookIndex++;
  const componentKey = `${currentComponentId}-${currentIndex}`;
  
  // Initialize state if doesn't exist
  if (!(componentKey in componentState)) {
    componentState[componentKey] = initialValue;
  }
  
  const currentState = componentState[componentKey];
  
  function setState(newValueOrFunction) {
    batcher.scheduleUpdate(() => {
      const newValue = typeof newValueOrFunction === 'function' 
        ? newValueOrFunction(componentState[componentKey])
        : newValueOrFunction;
        
      componentState[componentKey] = newValue;
      
      // Trigger re-render
      console.log(`State updated: ${componentKey} = ${newValue}`);
      if (reRenderFunction) reRenderFunction();
    });
  }
  
  return [currentState, setState];
}

// 🔹 Demo Usage
function simulateComponent() {
  hookIndex = 0; // Reset hook index for each render
  
  const [count, setCount] = useAdvancedState(0);
  const [name, setName] = useAdvancedState('Pragat');
  
  console.log(`Rendering: count=${count}, name=${name}`);
  
  return { count, setCount, name, setName };
}

// Set up re-render function
reRenderFunction = () => {
  console.log('\n--- Re-rendering Component ---');
  simulateComponent();
};

// 🔹 Test the batching
console.log('=== Testing Custom useState ===');

const { count, setCount } = simulateComponent();

console.log('\n--- Triggering Multiple Updates (Should Batch) ---');
setCount(1);
setCount(2);  
setCount(prev => prev + 1); // This will be 2 + 1 = 3

console.log('Updates queued, waiting for batch...');

// After 1ms, batched updates will execute
setTimeout(() => {
  console.log('\n--- Final State ---');
  console.log('All updates completed!');
}, 100);

// 🔹 Priority Queues Example
console.log('\n=== Priority Queue Simulation ===');

class PriorityUpdater {
  constructor() {
    this.syncUpdates = [];      // High priority
    this.asyncUpdates = [];     // Low priority
  }
  
  addSyncUpdate(fn) {
    this.syncUpdates.push(fn);
    this.flush();
  }
  
  addAsyncUpdate(fn) {
    this.asyncUpdates.push(fn);
    setTimeout(() => this.flush(), 0);
  }
  
  flush() {
    // Process high priority first
    while (this.syncUpdates.length > 0) {
      const update = this.syncUpdates.shift();
      update();
    }
    
    // Then low priority
    while (this.asyncUpdates.length > 0) {
      const update = this.asyncUpdates.shift();
      update();
    }
  }
}

const priorityUpdater = new PriorityUpdater();

// Simulate different priority updates
setTimeout(() => {
  console.log('\n--- Testing Priority Updates ---');
  
  priorityUpdater.addAsyncUpdate(() => console.log('Low priority update 1'));
  priorityUpdater.addSyncUpdate(() => console.log('HIGH PRIORITY UPDATE!'));
  priorityUpdater.addAsyncUpdate(() => console.log('Low priority update 2'));
  
}, 200);