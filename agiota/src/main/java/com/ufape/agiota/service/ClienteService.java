package com.ufape.agiota.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ufape.agiota.model.Cliente;
import com.ufape.agiota.repository.ClienteRepository;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    @Autowired
    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public Cliente createCliente(String nome, String email) {
        Cliente cliente = new Cliente(nome, email);
        return clienteRepository.save(cliente);
    }
    /**
     * Retorna todos os clientes.
     *
     * @return lista de clientes
     */
    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    /**
     * Encontra um cliente pelo ID.
     *
     * @param id o ID do cliente
     * @return um Optional contendo o cliente se encontrado
     */
    public Optional<Cliente> getClienteById(Long id) {
        return clienteRepository.findById(id);
    }

    /**
     * Salva um cliente no repositório.
     *
     * @param cliente o cliente a ser salvo
     * @return o cliente salvo
     */
    public Cliente saveCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    /**
     * Atualiza um cliente existente.
     *
     * @param id      o ID do cliente a ser atualizado
     * @param cliente o cliente com os novos dados
     * @return o cliente atualizado
     */
    public Cliente updateCliente(Long id, Cliente cliente) {
        if (clienteRepository.existsById(id)) {
            cliente.setId(id);
            return clienteRepository.save(cliente);
        } else {
            throw new RuntimeException("Cliente não encontrado com ID: " + id);
        }
    }

    /**
     * Deleta um cliente pelo ID.
     *
     * @param id o ID do cliente a ser deletado
     */
    public void deleteCliente(Long id) {
        if (clienteRepository.existsById(id)) {
            clienteRepository.deleteById(id);
        } else {
            throw new RuntimeException("Cliente não encontrado com ID: " + id);
        }
    }
}
