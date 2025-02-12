<?php

namespace App\Http\Repositories;

use App\Http\Interfaces\TaskRepositoryInterface;
use App\Models\Task;

class TaskRepository implements TaskRepositoryInterface
{
    public function all()
    {
        return Task::all();
    }

    public function create(array $data)
    {
        return Task::create($data);
    }

    public function find(int $id): Task
    {
        return Task::findOrFail($id);
    }

    public function update(int $id, array $data)
    {
        $task = $this->find($id);
        $task->update($data);
        return $task;
    }

    public function delete(int $id)
    {
        $task = $this->find($id);
        $task->delete();
    }
}
