from pyquil import Program
from pyquil.gates import H, CNOT, T
from pyquil.api import WavefunctionSimulator

# Create a quantum program
program = Program()

# Apply the Hadamard gate to qubit 0
program += H(0)

# Apply CNOT with control qubit 0 and target qubit 1
program += CNOT(0, 1)

# Apply the T gate to qubit 0
program += T(0)

# Create a simulator
simulator = WavefunctionSimulator()

# Simulate the program and get the wave function
wavefunction = simulator.simulate(program)

# Print the wave function
print(wavefunction)