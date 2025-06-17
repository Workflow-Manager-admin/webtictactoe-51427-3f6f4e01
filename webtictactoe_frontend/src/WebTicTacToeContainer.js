import React, { useEffect, useState, useRef } from "react";
import "./WebTicTacToeContainer.css";

/**
 * Color & palette constants for consistency.
 */
const PALETTE = {
  primary: "#4CAF50",
  secondary: "#FFC107",
  accent: "#2196F3",
  bgLight: "#f9f9f9",
  bgContainer: "#ffffff",
  text: "#181818",
  boardBorder: "#e0e0e0"
};

/**
 * PUBLIC_INTERFACE
 * WebTicTacToeContainer is the main container for the game layout and state.
 * It is responsible for arranging the overall page: player panels, board, and handling game scaffolding.
 */
function WebTicTacToeContainer() {
  // Game state scaffolding (static for now)
  const [gameState, setGameState] = useState({
    players: [{ name: "Player 1", mark: "X" }, { name: "Player 2", mark: "O" }],
    board: Array(9).fill(null),
    nextTurn: 0, // 0: Player 1, 1: Player 2
    status: "waiting", // or "playing" or "finished"
  });

  // Placeholder for real-time update wiring (e.g., websockets).
  // Using useRef in anticipation of actual socket implementation.
  const realtimeRef = useRef(null);

  useEffect(() => {
    // Placeholder for real-time subscription setup
    // e.g., realtimeRef.current = connectWebSocket()
    // Return cleanup function if needed
    return () => {
      // Cleanup logic for realtimeRef.current if implemented
    };
  }, []);

  // Render helpers
  const PlayerPanel = ({ player, isActive, side }) => (
    <div
      className={`ttt-player-panel ttt-${side}`}
      style={{
        borderColor: isActive ? PALETTE.primary : PALETTE.boardBorder,
        color: isActive ? PALETTE.primary : PALETTE.text,
        background: "#fff",
      }}
    >
      <span className="ttt-player-mark" aria-label={`Mark ${player.mark}`}>
        {player.mark}
      </span>
      <div className="ttt-player-name">{player.name}</div>
      {/* Optionally show "Your turn" */}
      {isActive && <div className="ttt-your-turn" style={{ color: PALETTE.accent }}>(Your turn)</div>}
    </div>
  );

  const GameBoard = () => (
    <div
      className="ttt-board"
      role="grid"
      aria-label="Tic Tac Toe Game Board"
      style={{
        borderColor: PALETTE.boardBorder,
        background: PALETTE.bgContainer,
      }}
    >
      {gameState.board.map((cell, idx) => (
        <div
          key={idx}
          className="ttt-cell"
          role="gridcell"
          tabIndex={0}
          aria-label={`Cell ${idx + 1}, ${cell ? `marked ${cell}` : "empty"}`}
        >
          {cell}
        </div>
      ))}
    </div>
  );

  return (
    <div className="ttt-root">
      <div className="ttt-main-container">
        <PlayerPanel
          player={gameState.players[0]}
          isActive={gameState.nextTurn === 0}
          side="left"
        />
        <div className="ttt-board-container">
          <h2 className="ttt-title" style={{ color: PALETTE.primary }}>
            WebTicTacToe
          </h2>
          <GameBoard />
        </div>
        <PlayerPanel
          player={gameState.players[1]}
          isActive={gameState.nextTurn === 1}
          side="right"
        />
      </div>
      {/* Real-time indicator placeholder (style as accent) */}
      <div className="ttt-statusbar" style={{ color: PALETTE.accent }}>
        {/* For now, just show a placeholder */}
        Real-time: <span>Not Connected</span>
      </div>
    </div>
  );
}

export default WebTicTacToeContainer;
