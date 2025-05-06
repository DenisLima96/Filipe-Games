"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Download, Save, Medal, Share2 } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function PontosTable() {
  // Lista de participantes em ordem alfabética
  const participantes = [
    "Cauan",
    "Dênis",
    "Duda",
    "Filipe",
    "Gabriel",
    "Isabella",
    "Jamylly",
    "Letícia",
    "Luiza",
    "Talita",
  ].sort()

  // Estado para armazenar os pontos
  const [pontos, setPontos] = useState<{ [key: string]: number[] }>({})
  const [salvando, setSalvando] = useState(false)
  const [carregado, setCarregado] = useState(false)

  // Carregar pontos do localStorage
  useEffect(() => {
    const pontosArmazenados = localStorage.getItem("filipesGamePontos")
    if (pontosArmazenados) {
      setPontos(JSON.parse(pontosArmazenados))
    } else {
      // Inicializar com zeros
      const pontosIniciais: { [key: string]: number[] } = {}
      participantes.forEach((nome) => {
        pontosIniciais[nome] = Array(10).fill(0)
      })
      setPontos(pontosIniciais)
    }
    setCarregado(true)
  }, [])

  // Salvar pontos no localStorage quando mudar
  useEffect(() => {
    if (carregado) {
      localStorage.setItem("filipesGamePontos", JSON.stringify(pontos))
    }
  }, [pontos, carregado])

  // Função para atualizar os pontos
  const atualizarPontos = (nome: string, rodada: number, valor: string) => {
    const novoValor = valor === "" ? 0 : Number.parseInt(valor)

    setPontos((pontosAtuais) => {
      const novosPontos = { ...pontosAtuais }
      if (!novosPontos[nome]) {
        novosPontos[nome] = Array(10).fill(0)
      }

      const rodadaArray = [...novosPontos[nome]]
      rodadaArray[rodada] = isNaN(novoValor) ? 0 : novoValor
      novosPontos[nome] = rodadaArray

      return novosPontos
    })
  }

  // Função para calcular o total de pontos de um participante
  const calcularTotal = (nome: string) => {
    if (!pontos[nome]) return 0
    return pontos[nome].reduce((total, pontoRodada) => total + pontoRodada, 0)
  }

  // Função para obter a classificação dos participantes
  const obterClassificacao = () => {
    return [...participantes].sort((a, b) => calcularTotal(b) - calcularTotal(a))
  }

  // Função para obter a posição de um participante
  const obterPosicao = (nome: string) => {
    const classificacao = obterClassificacao()
    return classificacao.indexOf(nome) + 1
  }

  // Função para exportar os dados como CSV
  const exportarCSV = () => {
    const classificacao = obterClassificacao()
    let csv = "Posição,Participante," + Array.from({ length: 10 }, (_, i) => `Rodada ${i + 1}`).join(",") + ",Total\n"

    classificacao.forEach((nome, index) => {
      const linha = [index + 1, nome, ...pontos[nome].map((p) => p.toString()), calcularTotal(nome)].join(",")
      csv += linha + "\n"
    })

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "FilipesGame_Pontuacao.csv")
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Função para simular salvamento
  const salvarPontuacao = () => {
    setSalvando(true)
    setTimeout(() => {
      setSalvando(false)
    }, 1000)
  }

  // Renderizar medalha baseada na posição
  const renderizarMedalha = (posicao: number) => {
    if (posicao === 1) {
      return <Trophy className="h-5 w-5 text-yellow-500" />
    } else if (posicao === 2) {
      return <Medal className="h-5 w-5 text-gray-400" />
    } else if (posicao === 3) {
      return <Medal className="h-5 w-5 text-amber-700" />
    }
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-8 px-2 sm:px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-red-100/30 pointer-events-none" />

            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />

              <CardHeader className="flex flex-col items-center pt-8 pb-4 border-b border-amber-200">
                <motion.div
                  className="mb-4 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 opacity-70 blur-sm"></div>
                  <Image
                    src="/images/filipes-game.png"
                    alt="Filipe's Game São João"
                    width={150}
                    height={150}
                    className="rounded-full relative border-4 border-white shadow-lg"
                  />
                </motion.div>

                <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 text-transparent bg-clip-text">
                  5° Filipe's game - São João
                </CardTitle>

                <div className="flex items-center gap-2 mt-2">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                  <span className="text-amber-700 text-sm font-medium">TABELA DE PONTUAÇÃO</span>
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                </div>
              </CardHeader>

              <CardContent className="p-4 sm:p-6">
                <div className="flex justify-end gap-2 mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-amber-700 border-amber-200 hover:bg-amber-50"
                    onClick={salvarPontuacao}
                  >
                    {salvando ? "Salvo!" : "Salvar"}
                    <Save className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-amber-700 border-amber-200 hover:bg-amber-50"
                    onClick={exportarCSV}
                  >
                    Exportar
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-amber-700 border-amber-200 hover:bg-amber-50">
                    Compartilhar
                    <Share2 className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <motion.div
                  className="rounded-xl border border-amber-200 shadow-sm overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="w-full">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gradient-to-r from-amber-50 to-amber-100">
                          <TableHead className="w-[40px] font-bold text-amber-900 text-base">#</TableHead>
                          <TableHead className="w-[120px] font-bold text-amber-900 text-base">Participante</TableHead>
                          {Array.from({ length: 10 }, (_, i) => (
                            <TableHead key={i} className="text-center font-bold text-amber-900 text-base p-1 sm:p-2">
                              R{i + 1}
                            </TableHead>
                          ))}
                          <TableHead className="text-center font-bold text-amber-900 bg-amber-100 text-base w-[80px]">
                            Total
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {obterClassificacao().map((nome, index) => (
                          <motion.tr
                            key={nome}
                            className={index % 2 === 0 ? "bg-white" : "bg-amber-50"}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.3 }}
                            whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.1)" }}
                          >
                            <TableCell className="font-medium text-amber-900 text-base p-2 text-center">
                              <div className="flex items-center justify-center">
                                {renderizarMedalha(index + 1) || index + 1}
                              </div>
                            </TableCell>
                            <TableCell className="font-medium text-amber-900 text-base p-2">{nome}</TableCell>
                            {Array.from({ length: 10 }, (_, i) => (
                              <TableCell key={i} className="p-1">
                                <Input
                                  type="number"
                                  min="0"
                                  className="w-10 sm:w-12 text-center mx-auto border-amber-200 focus:border-amber-400 focus:ring-amber-400 transition-all text-base p-1 sm:p-2"
                                  value={pontos[nome]?.[i] || 0}
                                  onChange={(e) => atualizarPontos(nome, i, e.target.value)}
                                />
                              </TableCell>
                            ))}
                            <TableCell className="text-center font-bold text-amber-900 bg-amber-50 p-1 sm:p-2">
                              <motion.div
                                className={`px-2 py-1 rounded-full border border-amber-200 shadow-sm text-base ${
                                  index === 0
                                    ? "bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-300"
                                    : index === 1
                                      ? "bg-gradient-to-r from-gray-100 to-gray-200"
                                      : index === 2
                                        ? "bg-gradient-to-r from-amber-100 to-amber-200"
                                        : "bg-gradient-to-r from-amber-50 to-amber-100"
                                }`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                {calcularTotal(nome)}
                              </motion.div>
                            </TableCell>
                          </motion.tr>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </motion.div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-amber-700">
                  <div className="italic mb-2 sm:mb-0">Pontuação atualizada automaticamente • Filipe's Games 2025</div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <span>Ouro</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Medal className="h-4 w-4 text-gray-400" />
                      <span>Prata</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Medal className="h-4 w-4 text-amber-700" />
                      <span>Bronze</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
