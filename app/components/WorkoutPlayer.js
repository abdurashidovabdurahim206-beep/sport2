"use client";

import { useEffect, useState } from "react";

export default function WorkoutPlayer({ workout }) {
  const [exerciseIndex, setExerciseIndex] =
    useState(0);

  const [secondsLeft, setSecondsLeft] =
    useState(
      workout?.exercises?.[0]?.duration || 0
    );

  const [running, setRunning] =
    useState(false);

  const [completed, setCompleted] =
    useState(false);

  const exercises =
    workout?.exercises || [];

  const currentExercise =
    exercises[exerciseIndex];

  useEffect(() => {
    if (!currentExercise) return;

    setSecondsLeft(
      currentExercise.duration
    );
  }, [exerciseIndex, currentExercise]);

  useEffect(() => {
    if (!running || completed) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          if (
            exerciseIndex <
            exercises.length - 1
          ) {
            setExerciseIndex(
              (index) => index + 1
            );

            return 0;
          }

          setRunning(false);
          setCompleted(true);

          saveWorkout();

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [
    running,
    completed,
    exerciseIndex,
    exercises.length,
  ]);

  function saveWorkout() {
    try {
      const saved =
        localStorage.getItem(
          "workoutHistory"
        );

      const history = saved
        ? JSON.parse(saved)
        : [];

      history.push({
        id: workout.id,
        title: workout.title,
        calories: workout.calories,
        duration: workout.duration,
        date: new Date().toISOString(),
      });

      localStorage.setItem(
        "workoutHistory",
        JSON.stringify(history)
      );
    } catch (error) {
      console.error(
        "Workout history error:",
        error
      );
    }
  }

  function resetWorkout() {
    setRunning(false);
    setCompleted(false);
    setExerciseIndex(0);

    setSecondsLeft(
      exercises[0]?.duration || 0
    );
  }

  function nextExercise() {
    if (
      exerciseIndex <
      exercises.length - 1
    ) {
      setExerciseIndex(
        (index) => index + 1
      );
    } else {
      setRunning(false);
      setCompleted(true);
      saveWorkout();
    }
  }

  if (!workout) {
    return (
      <div className="panel">
        Workout topilmadi.
      </div>
    );
  }

  return (
    <div className="player">

      <div className="player-exercise">

        <div className="big-icon">
          {workout.icon}
        </div>

        <span className="eyebrow">
          {workout.category}
        </span>

        <h2>
          {completed
            ? "Mashg‘ulot tugadi! 🎉"
            : currentExercise?.name}
        </h2>

        {!completed && (
          <p>
            Mashq{" "}
            {exerciseIndex + 1} /{" "}
            {exercises.length}
          </p>
        )}

      </div>

      {!completed && (
        <>
          <div className="timer">
            {String(
              Math.floor(secondsLeft / 60)
            ).padStart(2, "0")}
            :
            {String(
              secondsLeft % 60
            ).padStart(2, "0")}
          </div>

          <div className="player-controls">

            <button
              className="btn btn-primary"
              onClick={() =>
                setRunning(!running)
              }
            >
              {running
                ? "⏸ Pauza"
                : "▶ Boshlash"}
            </button>

            <button
              className="btn btn-light"
              onClick={nextExercise}
            >
              Keyingi →
            </button>

          </div>
        </>
      )}

      {completed && (
        <div className="player-controls">

          <button
            className="btn btn-primary"
            onClick={resetWorkout}
          >
            🔄 Qayta boshlash
          </button>

        </div>
      )}

    </div>
  );
}