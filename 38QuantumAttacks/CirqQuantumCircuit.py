import cirq

# Create qubits
qubit1 = cirq.GridQubit(0, 0)
qubit2 = cirq.GridQubit(0, 1)

# Create circuit
circuit = cirq.Circuit()

# Add operations
circuit.append(cirq.H(qubit1))
circuit.append(cirq.CNOT(qubit1, qubit2))
circuit.append(cirq.T(qubit1))

# Simulate circuit
simulator = cirq.Simulator()
result = simulator.simulate(circuit)

print(circuit)
print(result)