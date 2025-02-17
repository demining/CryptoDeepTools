from qiskit import QuantumCircuit, transpile
from qiskit.quantum_info import Statevector
from qiskit.visualization import plot_histogram

# Create a quantum circuit with 2 qubits and 2 classical bits
circuit = QuantumCircuit(2, 2)

# Apply the Hadamard gate (H, Clifford) to the first qubit
circuit.h(0)

# Apply the CNOT gate (Clifford) with control qubit 0 and target qubit 1
circuit.cx(0, 1)

# Add a T-gate (non-Clifford) to qubit 0
circuit.t(0)

# Measure the qubits and store results in classical bits
circuit.measure([0, 1], [0, 1])

# Simulate the circuit
simulator = Aer.get_backend('qasm_simulator') # Use Aer for simulation
compiled_circuit = transpile(circuit, simulator) # Transpile the circuit 
job = simulator.run(compiled_circuit, shots=1000) # Run simulation for 1000 times 
result = job.result() # Get results 
counts = result.get_counts(circuit) # Get measurement statistics

print(counts) # Print results 
plot_histogram(counts) # Display histogram of results (requires matplotlib)
