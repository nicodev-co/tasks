<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Http\Interfaces\TaskRepositoryInterface;
use App\Http\Requests\StoreTaskRequest;

class TaskController extends Controller
{
    public function __construct(private TaskRepositoryInterface $taskRepository) {}

    public function index()
    {
        return response()->json([
            'message' => 'Task list',
            'data' => $this->taskRepository->all()
        ]);
    }

    public function store(StoreTaskRequest $request)
    {
        $data = $request->validated();

        return response()->json([
            'message' => 'Task created',
            'data' => $this->taskRepository->create($data)
        ]);
    }

    public function show(int $id)
    {
        return response()->json([
            'message' => 'Task detail',
            'data' => $this->taskRepository->find($id)
        ]);
    }

    public function update(StoreTaskRequest $request, int $id)
    {
        $data = $request->validated();

        return response()->json([
            'message' => 'Task updated',
            'data' => $this->taskRepository->update($id, $data)
        ]);
    }

    public function destroy(int $id)
    {
        $this->taskRepository->delete($id);

        return response()->json([
            'message' => 'Task deleted'
        ]);
    }
}
