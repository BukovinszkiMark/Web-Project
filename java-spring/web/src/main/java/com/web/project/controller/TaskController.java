package com.web.project.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.web.project.model.Task;
import com.web.project.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/")
@Service
public class TaskController {

    private final TaskRepository taskRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/tasks")
    public List<Task> getAllTask(){
        return taskRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/tasks/{id}")
    public ResponseEntity<Task> getById(@PathVariable Integer id){
        return ResponseEntity.ok(taskRepository.getById(id));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/tasks")
    public ResponseEntity<Task> createTask(@RequestBody Task task){
        return ResponseEntity.ok(taskRepository.save(task));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/tasks/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Integer id, @RequestBody Task task){
        Task toUpdate = taskRepository.getById(id);

        toUpdate.setName(task.getName());
        toUpdate.setMinutes(task.getMinutes());
        toUpdate.setPriority(task.getPriority());
        toUpdate.setDifficulty(task.getDifficulty());
        toUpdate.setDescription(task.getDescription());

        Task updated = taskRepository.save(toUpdate);
        return ResponseEntity.ok(updated);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable Integer id){
        Task toDelete = taskRepository.getById(id);
        taskRepository.delete(toDelete);
    }
}
