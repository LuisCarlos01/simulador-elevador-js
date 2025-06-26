class ElevatorSystem {
  constructor(totalFloors = 10) {
    this.totalFloors = totalFloors;
    this.currentFloor = 0;
    this.queue = [];
    this.isMoving = false;
    this.direction = 'stopped';
    this.floorHeight = 40; // pixels por andar

    // Elementos do DOM
    this.elements = {
      currentFloor: document.getElementById('currentFloor'),
      elevatorCar: document.getElementById('elevatorCar'),
      upArrow: document.getElementById('upArrow'),
      downArrow: document.getElementById('downArrow'),
      floorButtons: document.getElementById('floorButtons'),
      emergencyBtn: document.getElementById('emergencyBtn'),
      queueList: document.getElementById('queueList'),
    };

    this.initialize();
  }

  initialize() {
    this.createFloorButtons();
    this.setupEventListeners();
    this.updateDisplay();
  }

  createFloorButtons() {
    for (let i = this.totalFloors; i >= 0; i--) {
      const button = document.createElement('button');
      button.className = 'floor-button';
      button.dataset.floor = i;
      button.textContent = i;
      this.elements.floorButtons.appendChild(button);
    }
  }

  setupEventListeners() {
    this.elements.floorButtons.addEventListener('click', (e) => {
      if (e.target.classList.contains('floor-button')) {
        const floor = parseInt(e.target.dataset.floor);
        this.callElevator(floor);
      }
    });

    this.elements.emergencyBtn.addEventListener('click', () => {
      this.emergencyStop();
    });
  }

  async callElevator(targetFloor) {
    if (
      targetFloor === this.currentFloor ||
      this.queue.includes(targetFloor)
    ) {
      return;
    }

    this.queue.push(targetFloor);
    this.updateQueueDisplay();

    if (!this.isMoving) {
      this.processQueue();
    }
  }

  async processQueue() {
    if (this.queue.length === 0 || this.isMoving) {
      return;
    }

    this.isMoving = true;
    
    while (this.queue.length > 0) {
      const targetFloor = this.queue[0];
      
      // Determina a direção
      this.direction = targetFloor > this.currentFloor ? 'up' : 'down';
      this.updateDirectionIndicators();

      // Move o elevador
      await this.moveToFloor(targetFloor);
      
      // Remove o andar da fila após chegar
      this.queue.shift();
      this.updateQueueDisplay();
      
      // Simula a parada no andar
      await this.stopAtFloor();
    }

    this.direction = 'stopped';
    this.isMoving = false;
    this.updateDirectionIndicators();
  }

  async moveToFloor(targetFloor) {
    const floorsToMove = Math.abs(targetFloor - this.currentFloor);
    const timePerFloor = 1000; // 1 segundo por andar
    const totalTime = floorsToMove * timePerFloor;

    // Atualiza a posição visual do elevador
    const targetPosition = (this.totalFloors - targetFloor) * this.floorHeight;
    this.elements.elevatorCar.style.bottom = `${targetPosition}px`;

    // Atualiza o andar atual gradualmente
    const startTime = Date.now();

    return new Promise(resolve => {
      const updateFloor = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / totalTime, 1);

        if (progress < 1) {
          requestAnimationFrame(updateFloor);
        } else {
          this.currentFloor = targetFloor;
          this.updateDisplay();
          resolve();
        }
      };

      updateFloor();
    });
  }

  async stopAtFloor() {
    // Simula a abertura e fechamento das portas
    const door = this.elements.elevatorCar.querySelector('.elevator-door');
    door.classList.add('open');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    door.classList.remove('open');
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  emergencyStop() {
    this.queue = [];
    this.isMoving = false;
    this.direction = 'stopped';
    this.updateQueueDisplay();
    this.updateDirectionIndicators();
  }

  updateDisplay() {
    this.elements.currentFloor.textContent = this.currentFloor;
  }

  updateDirectionIndicators() {
    this.elements.upArrow.classList.toggle('active', this.direction === 'up');
    this.elements.downArrow.classList.toggle('active', this.direction === 'down');
  }

  updateQueueDisplay() {
    this.elements.queueList.innerHTML = this.queue
      .map(floor => `<div class="queue-item">Andar ${floor}</div>`)
      .join('');
  }
}

// Inicializa o sistema do elevador quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  new ElevatorSystem(10);
});
