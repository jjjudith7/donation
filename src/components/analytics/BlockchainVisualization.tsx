import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useTheme } from '../../context/ThemeContext';

interface Block {
  id: string;
  timestamp: string;
  transactions: number;
  hash: string;
  previousHash: string;
}

const BlockchainVisualization: React.FC = () => {
  const { theme } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);

  // Mock blockchain data
  const blockchainData: Block[] = [
    {
      id: '1',
      timestamp: '2025-04-15T10:00:00Z',
      transactions: 5,
      hash: '0x7Fc9...3a24',
      previousHash: '0x0000...0000',
    },
    {
      id: '2',
      timestamp: '2025-04-15T10:05:00Z',
      transactions: 3,
      hash: '0x3aB8...9c12',
      previousHash: '0x7Fc9...3a24',
    },
    {
      id: '3',
      timestamp: '2025-04-15T10:10:00Z',
      transactions: 7,
      hash: '0x8dF1...6b45',
      previousHash: '0x3aB8...9c12',
    },
    {
      id: '4',
      timestamp: '2025-04-15T10:15:00Z',
      transactions: 4,
      hash: '0x2eC7...4f89',
      previousHash: '0x8dF1...6b45',
    },
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous visualization
    d3.select(svgRef.current).selectAll('*').remove();

    const width = svgRef.current.clientWidth;
    const height = 200;
    const blockWidth = 120;
    const blockHeight = 80;
    const blockSpacing = 60;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Create arrow marker
    svg.append('defs').append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 8)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', theme === 'dark' ? '#4B5563' : '#9CA3AF');

    const blockGroup = svg.append('g')
      .attr('transform', `translate(${blockSpacing}, ${height / 2})`);

    // Draw connections between blocks
    blockGroup.selectAll('line')
      .data(blockchainData.slice(1))
      .enter()
      .append('line')
      .attr('x1', (d, i) => i * (blockWidth + blockSpacing))
      .attr('y1', 0)
      .attr('x2', (d, i) => (i + 1) * (blockWidth + blockSpacing))
      .attr('y2', 0)
      .attr('stroke', theme === 'dark' ? '#4B5563' : '#9CA3AF')
      .attr('stroke-width', 2)
      .attr('marker-end', 'url(#arrow)');

    // Draw blocks
    const blocks = blockGroup.selectAll('g.block')
      .data(blockchainData)
      .enter()
      .append('g')
      .attr('class', 'block')
      .attr('transform', (d, i) => `translate(${i * (blockWidth + blockSpacing)}, ${-blockHeight / 2})`);

    blocks.append('rect')
      .attr('width', blockWidth)
      .attr('height', blockHeight)
      .attr('rx', 6)
      .attr('fill', theme === 'dark' ? '#1F2937' : '#F3F4F6')
      .attr('stroke', theme === 'dark' ? '#374151' : '#E5E7EB')
      .attr('stroke-width', 2);

    blocks.append('text')
      .attr('x', blockWidth / 2)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('fill', theme === 'dark' ? '#D1D5DB' : '#374151')
      .attr('font-size', '12px')
      .text(d => `Block ${d.id}`);

    blocks.append('text')
      .attr('x', blockWidth / 2)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .attr('fill', theme === 'dark' ? '#9CA3AF' : '#6B7280')
      .attr('font-size', '10px')
      .text(d => `${d.hash.slice(0, 6)}...${d.hash.slice(-4)}`);

    blocks.append('text')
      .attr('x', blockWidth / 2)
      .attr('y', 60)
      .attr('text-anchor', 'middle')
      .attr('fill', theme === 'dark' ? '#9CA3AF' : '#6B7280')
      .attr('font-size', '10px')
      .text(d => `${d.transactions} txs`);

  }, [theme, blockchainData]);

  return (
    <div className="w-full h-full">
      <svg ref={svgRef} className="w-full" />
    </div>
  );
};

export default BlockchainVisualization;