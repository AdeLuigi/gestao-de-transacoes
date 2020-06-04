import { getRepository, DeleteResult } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<DeleteResult> {
    const transactionRepository = getRepository(Transaction);

    const transactionDeleted = await transactionRepository.delete(id);

    if (transactionDeleted.affected === 0) {
      throw new AppError('this id not is valid for delete');
    }
    return transactionDeleted;
  }
}

export default DeleteTransactionService;
